export class InvalidFileError extends Error {
    constructor () {
        super('Arquivo inválido')
        this.name = 'InvalidFileError'
    }
}