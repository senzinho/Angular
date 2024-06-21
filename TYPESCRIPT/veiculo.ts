export default class Veiculo{
    // atributos
    protected modelo: string | undefined
    private velocidade: number = 0



    //metodos

    public acelerar(): void{
        this.velocidade = this.velocidade + 10
    } // void significa que a função não terá retorno


    public parar(): void {
        this.velocidade = 0
    }// void significa que a função não terá retorno

    public velocidadeAtual(): number {
        return this.velocidade
    }
}
