define([], function () {
    "use strict";

    var chkFlow = {
        "chkFlow_term_name":"流量路径",
        "chkFlow_term_protocol":"协议",
        "chkFlow_term_icmp":"ICMP",
        "chkFlow_term_tcp":"TCP",
        "chkFlow_term_udp":"UDP",
        "chkFlow_term_source_ip":"源IP",
        "chkFlow_term_source_port":"源端口",
        "chkFlow_term_destination_ip":"目的IP",
        "chkFlow_term_destination_port":"目的端口",
        "chkFlow_term_search":"查询",
        "chkFlow_term_status_processing":"查询中，本次查询最大可能消耗3~5分钟，请耐心等待...",
        "chkFlow_term_status_end": "查询完成",
        "chkFlow_term_status_error": "查询失败",
        "chkFlow_term_input_null":"输入不能为空",
        "chkFlow_term_input_valid":"输入无效",
        "chkFlow_term_ip_valid":"IP输入无效",
        "chkFlow_term_port_valid":"端口号输入无效",
        "chkFlow_term_auth_url_input_null":"输入不能为空，请输入URL和端口号。",
        "chkFlow_term_invalid_url":"URL输入无效",
        "chkFlow_term_name_rule":"输入字母、数字和_，不能以数字开头。",
        "chkFlow_term_dev_name":"名称",
        "chkFlow_term_src_net_id":"源网络ID",
        "chkFlow_term_dst_net_id":"目的网络ID",
        "chkFlow_term_subnet_invalid":"输入数字，字母，-",
        "chkFlow_term_vm_invalid": "输入数字，字母，-",
        "chkFlow_term_src_vm_id":"源VM  ID",
        "chkFlow_term_dst_vm_id":"目的VM  ID",
        "chkFlow_term_vm":"VM",
        "chkFlow_term_net":"Network",
        "chkFlow_term_dev_type":"类型",
        "chkFlow_term_ew_tab":"东西向",
        "chkFlow_term_sn_tab":"南北向",
        "chkFlow_term_vmPort":"VM端口",
        "chkFlow_term_vm_ip":"VM IP",
        "chkFlow_term_remote_ip":"远端IP",
        "chkFlow_term_no_data":"暂无数据",

        "chkFlow_term_next_step":"下一步",
        "chkFlow_term_pre_step":"上一步",
        "chkFlow_term_cancel":"取消",
        "chkFlow_term_finish":"完成",

        "chkFlow_term_cascading":"级联层",
        "chkFlow_term_sso":"SSO",
        "chkFlow_term_keyFile":"密钥",
        "chkFlow_term_porxy_ip":"反向代理IP",
        "chkFlow_term_tenant_name":"OS_TENANT_NAME",
        "chkFlow_term_username":"OS_USERNAME",
        "chkFlow_term_password":"OS_PASSWORD",
        "chkFlow_term_auth_url":"OS_AUTH_URL",
        "chkFlow_term_upload_success":"上传成功",
        "chkFlow_term_upload_fail":"上传失败",
        "chkFlow_term_file_verify_fail":"文件校验失败",
        "chkFlow_term_exceed_file_size":"文件大小超过最大值",
        "chkFlow_term_config_fail":"级联层配置失败",
        "chkFlow_term_restart_tomcat":"重启服务",
        "chkFlow_term_restart":"重启",
        "chkFlow_term_restart_tomcat_success":"重启服务成功，2秒后将跳转至主页面。",
        "chkFlow_term_restart_tomcat_fail":"重启服务失败，如要生效，请手动重启服务！",
        "chkFlow_term_tomcat_info":"需要重启服务才能使配置生效",
        "chkFlow_term_verify":"正在校验",
        "chkFlow_term_verify_success":"校验成功",
        "chkFlow_term_fsp_token_fail":"级联层配置信息无效，校验失败。",
        "chkFlow_term_config_info_fail":"初始配置信息获取失败",
        "chkFlow_term_sso_config":"启用SSO配置",
        "chkFlow_term_timeout_remind":"操作超时，将跳转至登录页面。",
        "chkFlow_term_key_format_fail":"文件格式错误，请选择无后缀名的文件。",
        "chkFlow_term_key_name_contain_zh":"文件名称不能包含中文字符。",
        "chkFlow_term_no_file_selected":"没有选择文件。",

        "chkFlow_term_help_proxy_ip":"级联层External API平面反向代理IP地址",
        "chkFlow_term_help_tenant_name":"级联层OpenStack环境变量：系统租户用户名",
        "chkFlow_term_help_username":"级联层OpenStack环境变量：DC管理员账号",
        "chkFlow_term_help_password":"级联层OpenStack环境变量：DC管理员密码",
        "chkFlow_term_help_auth_url":"级联层OpenStack环境变量：Keystone服务的鉴权地址",
        "chkFlow_term_help_key_file":"级联层的fsp用户和CNA节点gandalf用户登录私有密钥文件(目前环境使用相同的密钥文件)",

        "chkFlow_term_modify_system_config":"请不要随意修改系统配置信息。",
        "chkFlow_term_system_config":"系统配置",

        "chkFlow_term_exam_blue":"私有设备有流量",
        "chkFlow_term_exam_yellow":"公共设备有流量",
        "chkFlow_term_exam_red":"设备无流量"
    }
    return chkFlow;
});