define([], function () {
    "use strict";

    var chkFlow = {
        "chkFlow_term_config_name":"Variable Name",
        "chkFlow_term_config_value":"Variable Value",
        "chkFlow_term_config_update_time":"Update Time",
        "chkFlow_term_config_op":"Operation",
        "chkFlow_term_manager":"Manage",
        "chkFlow_term_config_edit":"Variable Edit",
        "chkFlow_term_edit_variable_btn":"OK",
        "chkFlow_term_cancel_variable_btn":"Cancel",
        "chkFlow_term_reset_btn":"Recovery",
        "chkFlow_term_packets_loss":"LossRate",
        "chkFlow_term_disconnect":"Disconnect",
        "chkFlow_term_deploy":"First Deploy",
        "chkFlow_term_variable_config":"Variable Config",
        "chkFlow_term_file_upload":"File Upload",
        "chkFlow_term_deploy_alert_label":"After the deployment of the detection tool, the user can set the parameter in Variable Config item.",
        "chkflow_term_config_ok":"Success to deploy!",
        "chkflow_term_config_error":"Failed to deploy Cascading.Please reconfigure Cascading layer OpenStack environment variable!",
        "chkFlow_term_detect_interval_time_name":"Detect Interval Time:",
        "chkFlow_term_detect_packets_number_name":"Packets Number",
        "chkFlow_term_detect_max_time_delay_name":"Max Time Delay",
        "chkFlow_term_detect_max_loss_rate_name":"Max Loss Rate",
        "chkFlow_term_detect_interval_time_detail":"unit=s,value=-1(kill),0(turn off),1~60",
        "chkFlow_term_packets_num_detail":"unit=pcs,value>0",
        "chkFlow_term_max_time_delay_detail":"unit=ms,value>=0",
        "chkFlow_term_max_loss_rate_detail":"unit=%,value>=0",
        "chkFlow_term_confirm":"Confirm",
        "chkFlow_term_confirm_window":"Confirm Window",
        "chkFlow_term_negative":"-1: kill",
        "chkFlow_term_zero":"0: turn off",
        "chkFlow_term_name": "NetWork Flow Path",
        "chkFlow_term_protocol":"Protocol",
        "chkFlow_term_icmp":"ICMP",
        "chkFlow_term_tcp":"TCP",
        "chkFlow_term_udp":"UDP",
        "chkFlow_term_source_ip":"Src IP",
        "chkFlow_term_source_port":"Src Port",
        "chkFlow_term_destination_ip":"Dst IP",
        "chkFlow_term_destination_port":"Dst Port",
        "chkFlow_term_search":"Search",
        "chkFlow_term_status_processing":"PROCESSING, Please wait for 3~5 minutes...",
        "chkFlow_term_status_end": "END",
        "chkFlow_term_status_error": "ERROR",
        "chkFlow_term_input_null":"Input can't be empty",
        "chkFlow_term_input_valid":"Input is invalid",
        "chkFlow_term_ip_valid":"Ip is invalid",
        "chkFlow_term_port_valid":"Port is invalid",
        "chkFlow_term_name_rule":"Input letter,digit and _ , Can't begin with a letter.",
        "chkFlow_term_dev_name":"Name",
        "chkFlow_term_src_net_id":"Src Subnet ID",
        "chkFlow_term_dst_net_id":"Dst Subnet ID",
        "chkFlow_term_net_invalid": "Input digit,letter,-",
        "chkFlow_term_vm_invalid": "Input digit,letter,-",
        "chkFlow_term_src_vm_id":"Src VM ID",
        "chkFlow_term_dst_vm_id":"Dst VM ID",
        "chkFlow_term_vm":"VM",
        "chkFlow_term_net":"Network",
        "chkFlow_term_dev_type":"Type",
        "chkFlow_term_ew_tab":"East-to-West",
        "chkFlow_term_sn_tab":"South-to-North",
        "chkFlow_term_vmPort":"VM Port",
        "chkFlow_term_vm_ip":"VM IP",
        "chkFlow_term_remote_ip":"Remote IP",
        "chkFlow_term_no_data":"No Data",

        "chkFlow_term_next_step":"Next",
        "chkFlow_term_pre_step":"Previous",
        "chkFlow_term_cancel":"Cancel",
        "chkFlow_term_finish":"Finish",

        "chkFlow_term_cascading":"Cascading",
        "chkFlow_term_sso":"SSO",
        "chkFlow_term_keyFile":"Key File",
        "chkFlow_term_porxy_ip":"Reverse Proxy IP",
        "chkFlow_term_tenant_name":"OS_TENANT_NAME",
        "chkFlow_term_username":"OS_USERNAME",
        "chkFlow_term_password":"OS_PASSWORD",
        "chkFlow_term_auth_url":"OS_AUTH_URL",
        "chkFlow_term_upload_success":"Upload file successfully",
        "chkFlow_term_upload_fail":"Failed to upload key file",
        "chkFlow_term_file_verify_fail":"Failed to Verify key file",
        "chkFlow_term_exceed_file_size":"File size exceed",
        "chkFlow_term_config_fail":"Failed to configure Cascading",
        "chkFlow_term_restart_tomcat":"Restart Service",
        "chkFlow_term_restart":"Restart",
        "chkFlow_term_restart_tomcat_success":"Restart service successfully.Jump to home page now.",
        "chkFlow_term_restart_tomcat_fail":"Failed to restart service. Please restart service manually to take effect!",
        "chkFlow_term_tomcat_info":"Restart service to make the configuration take effect.",
        "chkFlow_term_verify":"Verifying configuration information......",
        "chkFlow_term_verify_success":"Successfully verified!",
        "chkFlow_term_fsp_token_fail":"Failed to Verify Cascading.Cascading configuration information is invalid",
        "chkFlow_term_config_info_fail":"Failed to get initial configuration information",
        "chkFlow_term_sso_config":"SSO Configuration",
        "chkFlow_term_timeout_remind":"Session Timeout. Jump to login page now.",
        "chkFlow_term_key_format_fail":"File format error, please select a file without extension.",
        "chkFlow_term_key_name_contain_zh":"File names can not contain Chinese characters.",
        "chkFlow_term_invalid_url":"Error of url",
        "chkFlow_term_auth_url_input_null":"Input can't be empty, please input url and port number.",
        "chkFlow_term_no_file_selected":"No file selected.",

        "chkFlow_term_help_proxy_ip":"Reverse proxy IP address of the External API plane at the cascading layer",
        "chkFlow_term_help_tenant_name":"Cascading layer OpenStack environment variable: tenant name",
        "chkFlow_term_help_username":"Cascading layer OpenStack environment variable: user name of DC administrator",
        "chkFlow_term_help_password":"Cascading layer OpenStack environment variable: user password of DC administrator",
        "chkFlow_term_help_auth_url":"Cascading layer OpenStack environment variable: authentication address, which corresponds to publicURL endpoint of the Keystone service",
        "chkFlow_term_help_key_file":"Private key file for logging in to gandalf user of CNA node and fsp user of cascading layer",

        "chkFlow_term_modify_system_config":"Please do not modify arbitrarily.",
        "chkFlow_term_system_config":"Configuration",

        "chkFlow_term_exam_blue":"Private device has network traffic",
        "chkFlow_term_exam_yellow":"Share device has network traffic",
        "chkFlow_term_exam_red":"Device has not network traffic"
    };
    return chkFlow;
});