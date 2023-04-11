function solution(my_string) {
    return [...my_string].filter((el) => !(['a','e','i','o','u'].includes(el))).join('')
}