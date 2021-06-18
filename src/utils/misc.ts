export const currency = (value: Number) => {
    if(!value) return '0.00';
    return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
