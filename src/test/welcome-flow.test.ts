import { describe, it, expect, vi } from "vitest";

// Cada import después de resetModules() simula una carga de página nueva:
// el estado del flujo vuelve a partir de cero, como pasa al recargar.
const loadFlow = async () => {
  vi.resetModules();
  return await import("@/lib/welcomeFlow");
};

describe("flujo de bienvenida del chatbot", () => {
  it("abre el chat automáticamente una sola vez por carga de página", async () => {
    const flow = await loadFlow();
    expect(flow.claimChatAutoOpen()).toBe(true);
    expect(flow.claimChatAutoOpen()).toBe(false);
  });

  it("al recargar la página el chat vuelve a poder abrirse solo", async () => {
    const primera = await loadFlow();
    expect(primera.claimChatAutoOpen()).toBe(true);

    const segunda = await loadFlow();
    expect(segunda.claimChatAutoOpen()).toBe(true);
  });

  it("no abre el chat solo si el visitante ya lo abrió a mano", async () => {
    const flow = await loadFlow();
    flow.markChatOpenedByUser();
    expect(flow.claimChatAutoOpen()).toBe(false);
  });

  it("el contador de 10 segundos parte recién al cerrar el bienvenida", async () => {
    const flow = await loadFlow();
    expect(flow.hasWelcomeClosed()).toBe(false);
    flow.markWelcomeClosed();
    expect(flow.hasWelcomeClosed()).toBe(true);
  });
});
