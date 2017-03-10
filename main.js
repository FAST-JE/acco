function acco() {
    document.addEventListener("DOMContentLoaded", function() {
        var acco = document.getElementById("acco");

        acco.addEventListener("click", function(event) {

            var target = event.target;

            if(target.classList.contains("acco__trigger")) {

                var content = target.nextElementSibling,
                    textBlock = content.firstElementChild,
                    textHeight = textBlock.clientHeight,
                    item = target.parentNode,
                    items = [].slice.call(acco.children);

                event.preventDefault();

                if(!item.classList.contains("active")) {
                    items.forEach(function(elem) {
                        elem.classList.remove("active");
                        elem.lastElementChild.style.height = 0;
                    });
                    item.classList.add("active");
                    content.style.height = textHeight + "px";
                } else {
                    item.classList.remove("active");
                    content.style.height = 0;
                }


            }
        });
    });
}
acco();