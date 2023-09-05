var saveBtn = document.getElementById("save-contact");
saveBtn.addEventListener("click", function () {



    var vcard = "BEGIN:VCARD\nVERSION:3.0\nFN;CHARSET=UTF-8:\nN: Ammar;Sara; Ben;\nTEL;TYPE=CELL:+971523253163\nEMAIL:sara.benammar@kbza.sch.ae\nORG:Khalifa Bin Zayed Al Awal School\nTITLE:Principal\nADR; TYPE = WORK: ;;; Abudhabi;United Arab Emirates;;\nTITLE:\nREV:Mon Sep 04 2023 12: 55: 50 GMT + 0400(Gulf Standard Time)\nEND:VCARD";

    var blob = new Blob([vcard], { type: "text/vcard" });
    var url = URL.createObjectURL(blob);

    const newLink = document.createElement('a');
    newLink.download = "Sara Ben Ammar" + ".vcf";
    newLink.textContent = "Sara Ben Ammar";
    newLink.href = url;



    newLink.click();
});


