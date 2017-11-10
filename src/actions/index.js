export const GENERATE_PASSWORD = "GENERATE_PASSWORD"

export const generatePassword = (size = 12) => {
  return {
    type: GENERATE_PASSWORD,
    payload: {
      size: size,
    }
  }
}
