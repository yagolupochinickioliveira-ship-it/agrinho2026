function calcularEconomia() {
    const kilos = document.getElementById('residuo').value;
    const resultadoDiv = document.getElementById('resultado');

    if (kilos === "" || kilos <= 0) {
        alert("Por favor, insira uma quantidade válida de resíduos.");
        return;
    }

    // Valores fictícios para fins educacionais baseados em médias de compostagem:
    // Estimamos que de cada kg de resíduo, uma parte vira nutriente disponível.
    const npkEstimado = (kilos * 0.05).toFixed(2); // 5% de aproveitamento de nutrientes
    const economiaReais = (kilos * 0.45).toFixed(2); // Estimativa de R$ 0,45 economizados por kg de resíduo

    resultadoDiv.style.display = "block";
    resultadoDiv.innerHTML = `
        <h3>Resultado da Estimativa:</h3>
        <p>Ao compostar <strong>${kilos}kg</strong> de resíduos, você gera aproximadamente <strong>${npkEstimado}kg</strong> de nutrientes puros.</p>
        <p>💰 <strong>Economia estimada:</strong> R$ ${economiaReais} em fertilizantes químicos.</p>
        <small>*Cálculo baseado em médias de mercado. O valor real depende da qualidade do resíduo.</small>
    `;
}
