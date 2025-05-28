import { memo } from "react";

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const Hijo = memo(({ numero, incrementar }: { numero: number, incrementar: Function } ) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
});
