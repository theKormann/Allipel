'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Compass, Eye, Sparkles } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

export function MvvSection() {
  return (
    <section className="mt-20 bg-black px-6 py-12 md:py-20 text-white">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold md:text-5xl mb-4 text-white">
          Missão, Visão e Valores
        </h2>
        <p className="text-muted-foreground text-lg">
          Conheça os princípios que guiam a Allipel na entrega de excelência.
        </p>
      </div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-md mx-auto"
      >
        <CarouselContent className="-ml-4">
          {/* Missão */}
          <CarouselItem className="pl-4">
            <div className="p-1 h-full">
              <Card className="flex flex-col h-full bg-[#111111] border-neutral-800 text-white transition-all duration-300 ease-in-out hover:scale-[1.03] hover:border-[#DC143C] hover:shadow-2xl hover:shadow-[#DC143C]/10">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Compass className="h-8 w-8 text-[#DC143C]" />
                  <CardTitle className="text-xl">Missão</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Oferecer soluções eficientes em produtos descartáveis e de
                  limpeza, proporcionando praticidade e bem-estar aos clientes,
                  com foco na qualidade e no atendimento personalizado.
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          {/* Visão */}
          <CarouselItem className="pl-4">
            <div className="p-1 h-full">
              <Card className="flex flex-col h-full bg-[#111111] border-neutral-800 text-white transition-all duration-300 ease-in-out hover:scale-[1.03] hover:border-[#DC143C] hover:shadow-2xl hover:shadow-[#DC143C]/10">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Eye className="h-8 w-8 text-[#DC143C]" />
                  <CardTitle className="text-xl">Visão</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Ser reconhecida como referência no fornecimento de produtos
                  descartáveis e de limpeza na região de São Paulo,
                  destacando-se pela excelência no atendimento e variedade de
                  produtos.
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          {/* Valores */}
          <CarouselItem className="pl-4">
            <div className="p-1 h-full">
              <Card className="flex flex-col h-full bg-[#111111] border-neutral-800 text-white transition-all duration-300 ease-in-out hover:scale-[1.03] hover:border-[#DC143C] hover:shadow-2xl hover:shadow-[#DC143C]/10">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Sparkles className="h-8 w-8 text-[#DC143C]" />
                  <CardTitle className="text-xl">Valores</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p>
                    <strong className="text-white">Comprometimento:</strong>{' '}
                    Dedicação em atender às necessidades dos clientes.
                  </p>
                  <p>
                    <strong className="text-white">Qualidade:</strong> Produtos
                    que atendam aos padrões de excelência.
                  </p>
                  <p>
                    <strong className="text-white">Ética:</strong> Relações
                    transparentes e honestas.
                  </p>
                  <p>
                    <strong className="text-white">Inovação:</strong> Buscar
                    novas soluções que agreguem valor.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex bg-[#111111] border-neutral-800 hover:bg-[#DC143C] hover:text-white" />
        <CarouselNext className="hidden sm:flex bg-[#111111] border-neutral-800 hover:bg-[#DC143C] hover:text-white" />
      </Carousel>
    </section>
  );
}