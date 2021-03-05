/**
 * When you start a task and you want to specify a task
 * that happens when that task is done with stuff that
 * is available to you when you start the task.
 *
 * Closures make that easy and readable.
 */
function sendRequest() {
    var requestID = '123'
    $.ajax({
        url: '/myurl',
        success: function(response) {
            alert('Request ' + requestID + ' returned')
        }
    });
}