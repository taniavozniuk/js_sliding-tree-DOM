"use strict";
// write code here
const tree = document.querySelector(".tree");
for (const li of tree.querySelectorAll("li")){
    const span = document.createElement("span");
    li.prepend(span);
    span.append(span.nextSibling);
    tree.onclick = function(e) {
        if (e.target.tagName !== "SPAN") return;
        const childrenContainer = e.target.parentNode.querySelector("ul");
        if (!childrenContainer) return;
        childrenContainer.hidden = !childrenContainer.hidden;
    };
}

//# sourceMappingURL=index.f75de5e1.js.map
