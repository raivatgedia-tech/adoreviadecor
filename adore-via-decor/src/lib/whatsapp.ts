const WHATSAPP_NUMBER = "917977726749"; // International format without +

export function getWhatsAppURL(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function getProductWhatsAppURL(productName: string): string {
  const message = `Hello Suhani! 👋

I'm interested in the *"${productName}"* from Adore via Décor.

Could you please let me know:
• Price & customisation options
• Delivery timeline
• How to proceed with the order

Thank you! 😊`;
  return getWhatsAppURL(message);
}

export function getWorkshopWhatsAppURL(workshopName: string): string {
  const message = `Hello Suhani! 👋

I'd like to book a spot in the *"${workshopName}"*.

Could you please share:
• Upcoming dates & availability
• Any prerequisites or things to bring
• Payment details

Looking forward to it! 😊`;
  return getWhatsAppURL(message);
}

export function getBulkOrderWhatsAppURL(): string {
  const message = `Hello Suhani! 👋

I'm interested in placing a *bulk / corporate order* with Adore via Décor.

Please share details about:
• Minimum order quantity
• Customisation options for bulk
• Pricing & discounts
• Turnaround time

Thank you!`;
  return getWhatsAppURL(message);
}

export function getGeneralWhatsAppURL(): string {
  const message = `Hello Suhani! 👋 I came across Adore via Décor and I'd love to know more about your products and services.`;
  return getWhatsAppURL(message);
}
