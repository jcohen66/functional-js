function init() {
    var name = 'Mozilla';
    function displayName() {
        alert(name);
        displayName();
    }
}
init()