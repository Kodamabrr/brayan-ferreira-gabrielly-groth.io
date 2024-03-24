let totalCompra = 0;

        function adicionarAoCarrinho(produto, preco) {
            totalCompra += preco;
            document.getElementById("itens-carrinho").innerHTML += `<li>${produto} - 1x</li>`;
            document.getElementById("totalCompra").textContent = totalCompra.toFixed(2);
        }

        function finalizarCompra() {
            const parcelas = document.getElementById("parcelas").value;
            const totalParcela = (totalCompra / parcelas).toFixed(2);
            alert(`Compra finalizada! Sua compra ficou em R$${totalCompra.toFixed(2)} parcelada em ${parcelas} vezes. O total de cada parcela é R$${totalParcela}`);
            // Limpar carrinho e total após a compra
            totalCompra = 0;
            document.getElementById("itens-carrinho").innerHTML = "";
            document.getElementById("totalCompra").textContent = totalCompra.toFixed(2);
            // Limpar campos de cartão e CVV
            document.getElementById("cartao").value = "";
            document.getElementById("cvv").value = "";
        }