function formatDate(aaaa, mm, jj){
    var dateX = new Date();
console.log(`${dateX.getDay(jj)} ${dateX.getMonth(mm)} ${dateX.getFullYear(aaaa)} ` );
}
console.log(process.argv);
formatDate(process.argv[2], process.argv[3], process.argv[4]);
