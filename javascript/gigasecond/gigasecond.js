/*
Calculate the moment when someone has lived for 10^9 seconds.
A gigasecond is 10^9 (1,000,000,000) seconds.
*/

(function () {
    module.exports = function(date) {
        this.date = function() {
        const start = date.getTime();
        // 1000000000 + 000 s to ms 
        const end = new Date(start + 1000000000000)
        return end;
        } 
    };
})();