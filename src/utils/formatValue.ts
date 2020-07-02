const formatValue = (value: number): string =>
    Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);

// Intl.NumberFormat("en-NZ", {
//     style: "currency",
//     currency: "NZD",
// }).format(value);

export default formatValue;
