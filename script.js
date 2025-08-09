function check(input, key) {
    if (input.value == key)
        input.classList.add("correct");
    else
        input.classList.remove("correct");
}

function check_tol(input, key) {
    let least_significant_digit = get_lsf(key);
    let lo = key - least_significant_digit;
    let hi = key + least_significant_digit;
    if (lo <= input.value && input.value <= hi)
        input.classList.add("correct");
    else
        input.classList.remove("correct");
}

function get_lsf(key) {
    let string_key = String(key);
    let decimal_index = string_key.indexOf(".");
    if (decimal_index === -1)
        return 1;
    let decimal_places = string_key.length - decimal_index - 1;
    return Math.pow(10, - decimal_places);
}
