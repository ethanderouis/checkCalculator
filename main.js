function payCheckCalculator() {
    
    // Sales
    let currentSales = +document.querySelector(".total-sales").innerHTML; //  + sign converts these values into numbers in script
    let addedSales = +document.querySelector('#sales-being-added').value;
    document.querySelector(".total-sales").innerHTML = (currentSales + addedSales).toFixed(2);

    // Incentive Tabs
    let currentIncentiveTabs = +document.querySelector(".total-incentive-tabs").innerHTML; 
    let addedIncentiveTabs = +document.querySelector('#incentive-tabs-being-added').value;
    document.querySelector(".total-incentive-tabs").innerHTML = ((currentIncentiveTabs + addedIncentiveTabs)*0.10).toFixed(2);

    // Charge Tips
    let currentChargeTips = +document.querySelector(".total-charge-tips").innerHTML; //  + sign converts these values into numbers in script
    let addedChargeTips = +document.querySelector('#charge-tips-being-added').value;
    document.querySelector(".total-charge-tips").innerHTML = (currentChargeTips + addedChargeTips).toFixed(2);

    // Tipshare
    document.querySelector(".total-tipshare").innerHTML = ((+document.querySelector(".total-sales").innerHTML/100)*3.02).toFixed(2);

    // Tip Refund
    let currentTipRefund = +document.querySelector(".total-tip-refund").innerHTML; //  + sign converts these values into numbers in script
    let addedTipRefund = +document.querySelector('#tip-refund-being-added').value;
    document.querySelector(".total-tip-refund").innerHTML = (currentTipRefund + addedTipRefund).toFixed(2);

    // Hour and Minutes
    let currentShiftHours = +document.querySelector(".total-hours").innerHTML;
    let pushedHours = +document.querySelector("#hours-being-added").value;
    let pushedMinutes = (+document.querySelector("#minutes-being-added").value)/60;
    document.querySelector(".total-hours").innerHTML = (currentShiftHours + pushedHours + pushedMinutes).toFixed(2);
                          
    
    // paycheck section
    document.querySelector(".paycheck").innerHTML = (
        
        +document.querySelector(".total-hours").innerHTML*2.13.toFixed(2) +
        +document.querySelector(".total-incentive-tabs").innerHTML +
        +document.querySelector(".total-charge-tips").innerHTML -
        +document.querySelector(".total-tipshare").innerHTML - 
        +document.querySelector(".total-tip-refund").innerHTML
        
        
    ).toFixed(2);

}