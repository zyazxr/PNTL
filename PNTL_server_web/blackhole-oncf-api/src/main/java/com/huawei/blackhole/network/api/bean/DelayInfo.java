package com.huawei.blackhole.network.api.bean;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.huawei.blackhole.network.common.constants.Constants;
import com.huawei.blackhole.network.common.constants.PntlInfo;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.Serializable;
import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class DelayInfo implements Serializable {
    private static final long serialVersionUID = 5115688643432800494L;
    private static final Logger LOG = LoggerFactory.getLogger(LossRate.class);
    @JsonProperty("result")
    private static List<DelayInfoResult> result = new ArrayList<DelayInfoResult>();

    private static long delayThreshold = 0;

    public static List<DelayInfoResult> getResult() {
        return result;
    }

    public static void setResult(List<DelayInfoResult> result) {
        DelayInfo.result = result;
    }

    public static long getDelayThreshold() {
        return delayThreshold;
    }

    public static void setDelayThreshold(long delayThreshold) {
        DelayInfo.delayThreshold = delayThreshold;
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public static final class DelayInfoResult implements Serializable {
        private static final long serialVersionUID = -786990606399131420L;

        @JsonProperty("src_ip")
        private String srcIp;
        @JsonProperty("dst_ip")
        private String dstIp;
        @JsonProperty("send_delay")
        private String sendDelay;
        @JsonProperty("recv_delay")
        private String recvDelay;
        @JsonProperty("send_round_delay")
        private String sendRoundDelay;
        @JsonProperty("recv_round_delay")
        private String recvRoundDelay;
        @JsonProperty("time")
        private String timestamp;
        public String getSrcIp() {
            return srcIp;
        }

        public void setSrcIp(String srcIp) {
            this.srcIp = srcIp;
        }

        public String getDstIp() {
            return dstIp;
        }

        public void setDstIp(String dstIp) {
            this.dstIp = dstIp;
        }

        public String getSendDelay() {
            return sendDelay;
        }

        public void setSendDelay(String sendDelay) {
            this.sendDelay = sendDelay;
        }

        public String getRecvDelay() {
            return recvDelay;
        }

        public void setRecvDelay(String recvDelay) {
            this.recvDelay = recvDelay;
        }

        public String getSendRoundDelay() {
            return sendRoundDelay;
        }

        public void setSendRoundDelay(String sendRoundDelay) {
            this.sendRoundDelay = sendRoundDelay;
        }

        public String getRecvRoundDelay() {
            return recvRoundDelay;
        }

        public void setRecvRoundDelay(String recvRoundDelay) {
            this.recvRoundDelay = recvRoundDelay;
        }

        public String getTimestamp() {
            return timestamp;
        }

        public void setTimestamp(String timestamp) {
            this.timestamp = timestamp;
        }
    }

    public static void saveInfo(DelayInfoAgent.Flow flow){
        String srcIp = flow.getSip();
        String dstIp = flow.getDip();
        if (StringUtils.isEmpty(srcIp) || StringUtils.isEmpty(dstIp)){
            return;
        }
        if (StringUtils.isEmpty(flow.getTimes().getT1()) || StringUtils.isEmpty(flow.getTimes().getT2())
                || StringUtils.isEmpty(flow.getTimes().getT3()) || StringUtils.isEmpty(flow.getTimes().getT4())){
            return;
        }

        BigDecimal div = new BigDecimal(Double.toString(1000.000));
        BigDecimal t1 = new BigDecimal(flow.getTimes().getT1()).divide(div).setScale(3,BigDecimal.ROUND_HALF_UP);
        BigDecimal t2 = new BigDecimal(flow.getTimes().getT2()).divide(div).setScale(3,BigDecimal.ROUND_HALF_UP);
        BigDecimal t3 = new BigDecimal(flow.getTimes().getT3()).divide(div).setScale(3,BigDecimal.ROUND_HALF_UP);
        BigDecimal t4 = new BigDecimal(flow.getTimes().getT4()).divide(div).setScale(3,BigDecimal.ROUND_HALF_UP);

        boolean hasData = false;

        if (t4.floatValue() < DelayInfo.getDelayThreshold()){
            return;
        }

        DelayInfoResult newData = new DelayInfoResult();
        newData.setSrcIp(srcIp);
        newData.setDstIp(dstIp);
        newData.setSendDelay(t2.subtract(t1).toString());
        newData.setRecvDelay(t3.toString());
        newData.setSendRoundDelay(t4.toString());
        newData.setRecvRoundDelay("0.000");
        newData.setTimestamp(flow.getTime());

        PntlWarning.saveWarnToWarningList(newData);

        List<DelayInfoResult> resultList = getResult();
        for (DelayInfoResult result : resultList){
            if (result.getSrcIp().equals(srcIp) && result.getDstIp().equals(dstIp)){
                resultList.set(resultList.indexOf(result), newData);
                hasData = true;
                break;
            }
        }

        if (!hasData){
            resultList.add(newData);
        }
    }

    public static void refleshDelayInfoWarning(){
        List<DelayInfoResult> resultList = getResult();
        if (resultList == null || resultList.isEmpty()){
            return;
        }

        DateFormat df = new SimpleDateFormat(Constants.TIME_FORMAT);
        Iterator<DelayInfoResult> it = resultList.iterator();
        DelayInfoResult delayInfo = null;
        while (it.hasNext()){
            delayInfo = it.next();
            try {
                Date dt = df.parse(delayInfo.getTimestamp());
                Long intervalTime = System.currentTimeMillis() / 1000 - dt.getTime() / 1000;
                if (intervalTime >= PntlInfo.MONITOR_INTERVAL_TIME_NEWEST) {
                    LOG.info("Remove warning:" + delayInfo.getSrcIp() + " -> " + delayInfo.getDstIp());
                    it.remove();
                }
            } catch (ParseException e) {
                e.printStackTrace();
            }
        }
    }
}
