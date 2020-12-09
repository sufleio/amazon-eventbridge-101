

exports.approved = function(event, context) {
    console.log("APPROVED ORDER RECEIVED");
    console.log(event);
}

exports.rejected = function(event, context) {
    console.log("REJECTED ORDER RECEIVED");
    console.log(event);
}

exports.location = function(event, context) {
    console.log("ORDER SHIPPED TO ISTANBUL");
    console.log(event);
}