export default function hoverAnimation(items:[]):void{
    items.forEach((link:any) => {
        let letters = link.textContent.split("")
        link.textContent = ""
        letters.forEach((letter:string, i:number) => {
            i += 1;
            let span = document.createElement("span") as HTMLSpanElement;
            let delay = i / 20;
            if (i % 2 === 0) {
                delay -= 0.1;
            } else {
                delay += 0.05;
            }
            let letterOut = document.createElement("span");
            letterOut.textContent = letter;
            letterOut.style.transitionDelay = `${delay}s`;
            letterOut.classList.add("out");
            span.append(letterOut);
            let letterIn = document.createElement("span");
            letterIn.textContent = letter;
            letterIn.style.transitionDelay = `${delay}s`;
            letterIn.classList.add("in");
            span.append(letterIn);
            link.append(span);
        })
    })
}
