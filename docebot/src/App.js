import React, { useState } from "react";
import "./App.css";

const chatbotFluxo = {
  inicio: {
    mensagem: `Olá! 🍰 Seja bem-vindo(a) à nossa doceria artesanal!
Sou a DoceBot e vou te ajudar a fazer seu pedido.
Escolha uma opção:
1️⃣ Ver cardápio
2️⃣ Fazer pedido
3️⃣ Promoções do dia
4️⃣ Falar com atendente`,
    opcoes: ["1", "2", "3", "4"]
  },
  "1": {
    mensagem: `Aqui está nosso cardápio de hoje:

🍫 Brigadeiro Gourmet – R$ 2,50
🍓 Morango com Nutella – R$ 4,00
🧁 Cupcake recheado – R$ 6,00
🎂 Bolo no pote – R$ 7,50

Digite o número do doce e a quantidade para adicionar ao carrinho.
Exemplo: "1 - 4 unidades"`
  },
  "2": {
    mensagem: `Ótimo! Anotei seu pedido:
(Exibir resumo fictício)

💳 Como você prefere pagar?
1️⃣ PIX
2️⃣ Dinheiro
3️⃣ Cartão

🚚 Para finalizar, informe:
- Nome completo
- Endereço com ponto de referência
- Telefone para contato`
  },
  "3": {
    mensagem: `🎉 Promoção do dia:
Na compra de 6 brigadeiros, ganhe +1 grátis!
Cupcake + Bolo no pote por R$ 11,00!
Quer aproveitar? Me diga o que deseja. 😋`
  },
  "4": {
    mensagem: `Tudo bem! Estou te transferindo agora para um atendente humano. 👩‍🍳👨‍🍳
Aguarde um instante...`
  }
};

function App() {
  const [historico, setHistorico] = useState([chatbotFluxo.inicio.mensagem]);
  const [entrada, setEntrada] = useState("");

  const enviarMensagem = () => {
    const userInput = entrada.trim();
    const novaConversa = [...historico, `💬 ${userInput}`];
    const resposta = chatbotFluxo[userInput]?.mensagem || "Desculpe, não entendi. Por favor, escolha uma opção válida (1, 2, 3 ou 4).";
    setHistorico([...novaConversa, resposta]);
    setEntrada("");
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#db2777" }}>DoceBot - Chat de Pedidos</h1>
      <div style={{ height: 300, overflowY: "scroll", background: "#f9f9f9", padding: 10, borderRadius: 5, border: "1px solid #ddd", marginBottom: 10 }}>
        {historico.map((msg, i) => <p key={i} style={{ whiteSpace: "pre-wrap" }}>{msg}</p>)}
      </div>
      <div style={{ display: "flex" }}>
        <input
          style={{ flex: 1, padding: 8, borderRadius: "5px 0 0 5px", border: "1px solid #ccc" }}
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && enviarMensagem()}
          placeholder="Digite sua mensagem..."
        />
        <button onClick={enviarMensagem} style={{ padding: "0 16px", backgroundColor: "#db2777", color: "#fff", border: "none", borderRadius: "0 5px 5px 0" }}>
          Enviar
        </button>
      </div>
    </div>
  );
}

export default App;
