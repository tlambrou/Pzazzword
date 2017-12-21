export const GENERATE_PASSWORD = "GENERATE_PASSWORD"

export const generatePassword = (size = 12, name) => {
  return {
    type: GENERATE_PASSWORD,
    payload: {
      size: size,
      name: name
    }
  }
}
