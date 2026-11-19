// 1. Ліквідація Stamp Coupling: функція приймає лише примітивні типи (city, weightKg)
function calculateDeliveryCost(city, weightKg) {
    const baseRate = city === "Kyiv" ? 80.0 : 110.0;
    return baseRate + (weightKg * 12.0);
}

// 2. Ліквідація Common Coupling та Control Coupling:
// Ставка податку передається явно (за замовчуванням 0.20), логіку розділено на окремі функції
function processStandardInvoice(amount, city, weightKg, taxRate = 0.20) {
    const delivery = calculateDeliveryCost(city, weightKg);
    const total = (amount * (1 + taxRate)) + delivery;
    return { status: "PROCESSED", total: Number(total.toFixed(2)) };
}

function processTaxExemptInvoice(amount, city, weightKg) {
    const delivery = calculateDeliveryCost(city, weightKg);
    const total = amount + delivery;
    return { status: "TAX_EXEMPT", total: Number(total.toFixed(2)) };
}

// Окрема функція для скасування (за потреби збереження цієї гілки логіки)
function cancelInvoice() {
    return { status: "CANCELLED", total: 0.0 };
}

module.exports = {
    calculateDeliveryCost,
    processStandardInvoice,
    processTaxExemptInvoice,
    cancelInvoice
};
