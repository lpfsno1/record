/*
Surge 3+:
[Script]
http-response ^https:\/\/license\.pdfexpert\.com\/api\/.*\/(documents|pdfexpert6)\/subscription\/(refresh$|check$) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/lpfsno1/record/master/DocPDF.js
[MITM]
hostname = license.pdfexpert.com
*/

var obj = JSON.parse($response.body);

obj["isInGracePeriod"] = false;
obj["isEligibleForIntroPeriod"] = false;
obj["originalTransactionId"] = "20000000000000";
obj["subscriptionState"] = "active";
obj["subscriptionExpirationDate"] = "23:59 31/12/2029";
obj["subscriptionAutoRenewStatus"] = "autoRenewOff";
obj["subscriptionReceiptId"] = "1500000000000";

$done({body: JSON.stringify(obj)});
