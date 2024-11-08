
function Validator(formSelector) {
    var formElement = document.querySelector(formSelector) 

    function getParent(element, selector) {
        
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement
            }

            element = element.parentElement
        }

    }


    var formRules = {}
    var validatorRules = {
        required(value) {
            return value ? undefined : 'Vui lòng nhập trường này'
        },
        email(value) {
            var regex =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            return regex.test(value) ? undefined : 'Trường này phải là email'
        },
        min(min) {
            return (value) => {
                return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} kí tự`
            }
        },
        max(max) {
            return (value) => {
                return value.length <= max ? undefined : `Vui lòng nhập tối đa nhất ${max} kí tự`
            }
        },
        confirm(value){
            return value === formElement.querySelector('[name="password"]').value ? undefined : 'Mật khẩu nhập lại không chính xác'
        }
        
    }

    
    if(!formElement) { return } 
        
    var inputs = formElement.querySelectorAll('[name][rules]')
    for(let input of inputs) {

        var rules = input.getAttribute('rules').split('|')
        for(let rule of rules) {
            var ruleInfo
            var isRuleHasValue = rule.includes(':')

            if(isRuleHasValue) {
                ruleInfo = rule.split(':')
                rule = ruleInfo[0]
            }

            var ruleFunc = validatorRules[rule]

            if(isRuleHasValue) {
                ruleFunc = ruleFunc(ruleInfo[1])
            }

            if(Array.isArray(formRules[input.name])) {
                formRules[input.name].push(ruleFunc)
            } else {
                formRules[input.name] = [ruleFunc]
                
            }
        }

        // Lắng nghe sự kiện 
        input.onblur = handleValidate
        input.oninput = handleClearError



    }

    // Hàm thực hiện validate
    function handleValidate(e) {
        var rules = formRules[e.target.name]

        var errMessage
        rules.some((rule) => {
            errMessage =  rule(e.target.value)
            return errMessage
        })

        if(errMessage) {
            var formGroup = getParent(e.target, '.form-group')
            if(formGroup) {
                formGroup.classList.add('invalid')
                var formMessage = formGroup.querySelector('.form-message')
                if(formMessage) {
                    formMessage.innerHTML = errMessage
                }
            }

        }

        return !errMessage

    }
    
    // Hàm clear lỗi
    function handleClearError(e) {
        var formGroup = getParent(e.target, '.form-group')
        if(formGroup.classList.contains('invalid')) {
            formGroup.classList.remove('invalid')

            var formMessage = formGroup.querySelector('.form-message')
                if(formMessage) {
                    formMessage.innerHTML = ''
                }
        }
    }

    // Xử lí submit form
    formElement.onsubmit = (e) => {
        e.preventDefault()

        var isValid = true

        for(let input of inputs) {
            isValid = handleValidate({target: input})       
        }

        // Khi không có lỗi và form có button (type=submit) => submit bình thừơng
        // button type=submit để fetch api
        if(isValid && formElement.querySelector('button[type="submit"]')) {
            formElement.submit()
        }
    }

}