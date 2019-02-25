(function () {
    "use strict";
    window.onload = function () {
        //Add event listener here!
        var btn = document.getElementById("btn");
        btn.addEventListener("click", addRow);

        //document.getElementById("btn").addEventListener("click", function () {
            // Click event for element btn
            //alert("Add Button clicked");
        //});

        function addRow() {
            //alert("In Add Row");
            var elementName = document.getElementById("name");
            var itemName = elementName.value;
            var elementPrice = document.getElementById("price");
            var itemPrice = elementPrice.value;
            // Validate that a valid price was enterted
            if (!isNaN(itemPrice) && itemPrice >= 0) {
                itemPrice = Number(itemPrice);
                createInnerHTML(itemName, itemPrice);
                elementName.value = "";
                elementPrice.value = "";
                elementName.focus();
            }
            else {
                alert("Please enter a valid price!");
                elementPrice.focus();
            }
        }

        function createInnerHTML(name, price) {
            // Adds a detail line to sale table
            var list = document.getElementById("list");
            var row = document.createElement("tr");
            var cell = document.createElement("td");

            // Blank <td></td>
            row.appendChild(cell);

            // Add name to table row
            cell = document.createElement("td");
            var text = document.createTextNode(name);
            cell.appendChild(text);
            row.appendChild(cell);

            // Add price to table row
            cell = document.createElement("td");
            cell.setAttribute("align", "right");
            text = document.createTextNode(price.toFixed(2));
            cell.appendChild(text);
            row.appendChild(cell);

            // Add row to table body
            list.appendChild(row);

            // Items total Price
            updateTotal(price);
        }

        function updateTotal(price) {
            // Adds price to the total
            var elementTotalPrice = document.getElementById("totalPrice");
            elementTotalPrice.setAttribute("Style", "text-align: right;");
            //elementTotalPrice.setAttribute("align", "right");
            var totalPrice = elementTotalPrice.innerText;
            totalPrice = Number(totalPrice);
            totalPrice += price;
            elementTotalPrice.innerText = totalPrice.toFixed(2);
            // jQuery way
            //$("#totalPrice").html();
        }
    };
}());

