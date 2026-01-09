//  error first callkback  function pattern

function getData(callback) {
    let error = null;
    let data = "Here is your data";
    // simulating an error
    if (!data) {
        error = "No data found";
    }
    callback(error, data);
}
getData(function (err, data) {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("Data:", data);
    }
});