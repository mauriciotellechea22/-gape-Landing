import { CartItem } from './store';

export function generateWhatsAppLink(
    items: CartItem[],
    name: string,
    address: string,
    phoneNumber: string = '59892654977', // Default phone number
    notes?: string // Optional notes for special instructions
): string {
    // Format each item in the message
    const itemsList = items
        .map(item => `- ${item.quantity}x ${item.product.name} ($${item.product.price * item.quantity})`)
        .join('\n');

    // Calculate total
    const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    // Build the message
    let message = `Hola! Soy ${name}, quiero pedir:\n${itemsList}\nTotal: $${total}\nDirección: ${address}`;

    // Add notes if provided
    if (notes && notes.trim()) {
        message += `\n\nNotas: ${notes.trim()}`;
    }

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Return WhatsApp URL
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
