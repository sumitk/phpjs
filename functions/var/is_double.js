function is_double( mixed_var ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Paulo Ricardo F. Santos
    //  -   depends on: is_float
    // %        note 1: 1.0 is simplified to 1 before it can be accessed by the is_int function, this makes
    // %        note 1: it different from the PHP implementation. We can't fix this unfortunately.
    // *     example 1: is_double(186.31);
    // *     returns 1: true

    return is_float(mixed_var);
}