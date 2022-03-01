module.exports = (req, res) => {
    var firstName = ""
    var middleName = ""
    var surName = ""
    var email = ""
    var caddress = ""
    var department = ""
    var DOB = ""
    var sex = ""
    var phone = ""
    var state = ""
    var LGA = ""
    const data = req.flash('data');
    console.log(data)
    if (typeof data != "undefined") {
        firstName = data.firstName
        middleName = data.middleName
        surName = data.surName
        email = data.email
        caddress = data.caddress
        department = data.department
        DOB = data.DOB
        sex = data.sex
        phone = data.phone
        parent = data.parent
        state = data.state
        LGA = data.LGA
    }
    res.render('form supervisor', {
        errors: req.flash('validationErrors'),
        firstName: firstName,
        middleName: middleName,
        surName: surName,
        email: email,
        caddress: caddress,
        department: department,
        DOB: DOB,
        sex: sex,
        phone: phone,
        parent: parent,
        state: state,
        LGA: LGA
    })
}





