export const validationsData = {
  password: [
    {
      regex: 'passwordLength',
      helperText: 'The password must be 8 characters length',
    },
    {
      regex: 'leastOneUpperCaseLetter',
      helperText: 'Must contain at least one uppercase letter',
    },
    {
      regex: 'leastOneLowerCaseLetter',
      helperText: 'Must contain at least one lowercase letter',
    },
    {
      regex: 'leastOneNumber',
      helperText: 'Must contain at least one number',
    },
    {
      regex: 'leastOneSpecialCharacter',
      helperText:
        'Must contain at least one special character within `!@#$%^&*_-~.,;:+=`',
    },
  ],
}
export const regex = {
  email: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*_~.,:;+=`\-])([A-Za-z\d#?!@$%^&*_~.,:;+=`\-]|[^ ]){8,8}$/,
  passwordLength: /^([A-Za-z\d#?!@$%^&*_~.,:;+=`\-]|[^ ]){8,8}$/,
  leastOneUpperCaseLetter: /[A-Z]/,
  leastOneLowerCaseLetter: /[a-z]/,
  leastOneNumber: /[0-9]/,
  leastOneSpecialCharacter: /[#?!@$%^&*_~.,:;+=`\-]/,
}
