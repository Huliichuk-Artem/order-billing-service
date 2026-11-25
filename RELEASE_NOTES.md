# Release Notes v1.1.0 – Data Coupling & Updated Tariffs

## Added
* Спеціальний тариф базової ставки 80.0 грн для міста Київ ("Kyiv").
* Явний параметр ставки податку `taxRate` (зі значенням за замовчуванням 0.20) у функцію розрахунку інвойсу.

## Changed
* Коефіцієнт доставки за кілограм ваги збільшено з 12.0 до 15.0 грн/кг.
* Виконано повний рефакторинг архітектурної зв'язності модуля до рівня Data Coupling.

## Breaking Changes
* Змінено сигнатури функцій розрахунку: `calculateDeliveryCost` тепер приймає аргументи `(city, weightKg)` замість об'єкта `customerProfile`.
* Видалено глобальну змінну `GLOBAL_TAX_RATE`.
* Видалено прапорець `modeFlag`: функцію `processInvoice` розділено на дві окремі функції `processStandardInvoice` та `processTaxExemptInvoice`.
