const original = { 
    name: "Arvind",
    job: {
        eid: 2 ,
        deptt:"CSE"
    } 
    };

const deepCopy = structuredClone(original);
deepCopy.job.deptt = "CSE-3";
console.log(original.job.deptt); // "CSE" (unchanged)
console.log(deepCopy.job.deptt); // "ECE"