import { Carousel, Typography, Button } from "@material-tailwind/react";

export function CarouselWithContent() {
  return (
    <Carousel
      navigation={false}
      autoplay="true"
      loop="True"
      transition={{ type: "tween", duration: 1.5 }}
      autoplayDelay={"8000"}
      className=" py-0 h-96"
    >
      <div className="h-96 w-full">
        <img
          src="./src/public/img/variedadUnidades.jpg"
          alt="image 1"
          className="h-full w-full "
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="container w-full md:w-full md:pl-10 lg:pr-20">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Unidades tematicas
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Contamos con todos los temas que se requieren durante la cursada de "Matematica aplicada" de la carrera de Desarrollo de Software Multiplataforma
            </Typography>
            <div className="flex gap-2">
              <a href="./unidades">
                <Button size="lg" color="white">
                  Explorar
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="./src/public/img/act-mate.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="container w-full pl-12 md:w-full md:pl-10 lg:pr-20">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Una gran variedad de actividades para practicar
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Cada tema proporcionado cuenta con sus respectivas actividades para que los estudiantes puedan practicar de forma conforme
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explorar
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="./src/public/img/bibliografia.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="container w-full pl-12 md:w-full md:pl-10 lg:pr-20">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Blibliografía recomendada por profesionales
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Contamos con bibliografia brindada por profesionales para cada uno de los temas disponibles
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explorar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
