import { isUndefined } from "util";

const aah = {
    AUG: "Methionine",
    UUC: "Phenylalanine",
    UUU: "Phenylalanine",
    UUG: "Leucine",
    UUA: "Leucine",
    UCU: "Serine",
    UCC: "Serine",
    UCA: "Serine",
    UCG: "Serine",
    UAC: "Tyrosine",
    UAU: "Tyrosine",
    UGU: "Cysteine",
    UGC: "Cysteine",
    UGG: "Tryptophan",
    UAA: "STOP",
    UAG: "STOP",
    UGA: "STOP"
}

/**
 * Translate the RNA string to a sequence of amino acids
 * @param {string} rna 
 */
export const translate = (rna) => {

    if (isUndefined(rna) || rna.length < 3) return [];

    let start = 0;
    let protein = [];

    let codon = rna.substring(start, start + 3);
    let aa = aah[codon];

    while (aa != "STOP") {
        if (isUndefined(aa)) throw new Error('Invalid codon');
        protein.push(aa);        
        
        start += 3;
        if (start + 3 > rna.length) return protein;

        aa = aah[rna.substring(start, start + 3)];        
    }
    return protein;
}