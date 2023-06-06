export interface Response<T>{ //T é um generic, sendo interface padrão para API
    message?: string,
    data: T //pode receber N coisas
}