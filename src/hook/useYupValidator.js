import  { useCallback }  from 'react'

// investigar el useCallback que es como el useEffect pero creo no se renderiza al inciar. 

const useYupValidator = (validationSchema) =>
    
    useCallback(async data => {

        try {

            // declaramos los valores
            const values = await validationSchema.validate(data, { abortEarly: false });
            // retornamos los valores y un objeto en caso de los errores
            return{ values, errors: {}} 
        } catch (error) {
            return{ 
                values: {},
                errors: error.inner.reduce(
                    (allErrors, currentError) => ({
                        ...allErrors, [currentError.path] :{
                            type: currentError.type ?? "validation",
                            message: currentError.message
                        }
                    }),
                    // aqui un objeto quien sabbe pa que!
                        {}
                    )
            }
            
        }

    },[validationSchema])


export default useYupValidator