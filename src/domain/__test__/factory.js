const CUSTOMER_VALID = {
  name: 'Jhon doe',
  email: 'foo@bar.com',
  phone: '+55 (11) 96648-8392',
  documentType: 'cpf',
  document: '90847739281',
  password: '@QAZwsx112345'
}

export function validCustomer () {
  return CUSTOMER_VALID
}

export function withKey (key, value) {
  return {
    ...CUSTOMER_VALID,
    [key]: value
  }
}

export function inValidCustomer () {
  return {}
}