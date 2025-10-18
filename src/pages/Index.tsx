import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: 'https://cdn.poehali.dev/projects/53302110-19c1-42a7-af1d-801fb88b54db/files/dc6c95ea-00d3-4381-b70e-5e11b355a79f.jpg',
      title: 'Исторический центр',
      description: 'Старинные улицы Ирбита'
    },
    {
      url: 'https://cdn.poehali.dev/projects/53302110-19c1-42a7-af1d-801fb88b54db/files/317094ed-b48b-4856-acdf-491cb55af672.jpg',
      title: 'Городские улицы',
      description: 'Современный облик города'
    },
    {
      url: 'https://cdn.poehali.dev/projects/53302110-19c1-42a7-af1d-801fb88b54db/files/6a6c7089-b69a-4193-8d47-e35a3264ed04.jpg',
      title: 'Храмы Ирбита',
      description: 'Православная архитектура'
    },
    {
      url: 'https://cdn.poehali.dev/projects/53302110-19c1-42a7-af1d-801fb88b54db/files/453f6235-4e97-4119-8de7-be81a1052685.jpg',
      title: 'Архитектурное наследие',
      description: 'Памятники истории'
    },
    {
      url: 'https://cdn.poehali.dev/projects/53302110-19c1-42a7-af1d-801fb88b54db/files/2fc7f6af-ae9d-49f1-8966-765fe1bf338c.jpg',
      title: 'Городская площадь',
      description: 'Центр городской жизни'
    },
    {
      url: 'https://cdn.poehali.dev/projects/53302110-19c1-42a7-af1d-801fb88b54db/files/f6bdfa2a-6af1-44fc-8019-989e8e340727.jpg',
      title: 'Река Ница',
      description: 'Природа города'
    },
    {
      url: 'https://cdn.poehali.dev/projects/53302110-19c1-42a7-af1d-801fb88b54db/files/d1853ac4-ed47-41bc-a3f0-726dd8b6fad5.jpg',
      title: 'Мотоциклетный завод',
      description: 'Промышленное наследие'
    },
    {
      url: 'https://cdn.poehali.dev/projects/53302110-19c1-42a7-af1d-801fb88b54db/files/3cd9badc-1950-4f5a-bd30-fd9b596a888a.jpg',
      title: 'Современный Ирбит',
      description: 'Развитие города'
    }
  ];

  const timelineEvents = [
    {
      year: '1631',
      title: 'Основание Ирбита',
      description: 'Город основан как острог на реке Ница',
      era: 'old'
    },
    {
      year: '1643',
      title: 'Ирбитская ярмарка',
      description: 'Основание знаменитой Ирбитской ярмарки — второй по значимости в России',
      era: 'old'
    },
    {
      year: '1775',
      title: 'Статус города',
      description: 'Ирбит получает статус города',
      era: 'old'
    },
    {
      year: '1930-е',
      title: 'Индустриализация',
      description: 'Строительство крупных промышленных предприятий',
      era: 'middle'
    },
    {
      year: '2010-2020',
      title: 'Современная реконструкция',
      description: 'Масштабная реконструкция исторического центра города',
      era: 'new'
    },
    {
      year: '2023',
      title: 'Цифровое будущее',
      description: 'Развитие умного города и сохранение культурного наследия',
      era: 'new'
    }
  ];



  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-secondary">Ирбит</h1>
          <div className="flex gap-6">
            <Button
              variant={activeSection === 'home' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('home')}
              className="text-base"
            >
              Главная
            </Button>
            <Button
              variant={activeSection === 'history' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('history')}
              className="text-base"
            >
              История
            </Button>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <div className="pt-20">
          <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary/90 z-10"></div>
            <img
              src="https://cdn.poehali.dev/projects/53302110-19c1-42a7-af1d-801fb88b54db/files/dc6c95ea-00d3-4381-b70e-5e11b355a79f.jpg"
              alt="Ирбит"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-20 text-center text-white px-4 animate-fade-in">
              <h2 className="text-6xl font-bold mb-6">Ирбит</h2>
              <p className="text-2xl mb-8">Где история встречается с будущим</p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-secondary hover:bg-white/90"
                onClick={() => setActiveSection('history')}
              >
                Узнать историю
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h3 className="text-4xl font-bold text-center mb-4 text-secondary">
                Фотогалерея
              </h3>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Красота Ирбита в фотографиях
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                    onClick={() => setSelectedImage(image.url)}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h4 className="font-semibold text-sm">{image.title}</h4>
                        <p className="text-xs text-white/80">{image.description}</p>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Icon name="Expand" size={16} className="text-secondary" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <Icon name="X" size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Просмотр"
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

          <section className="py-20 bg-muted">
            <div className="container mx-auto px-4 text-center">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-8 animate-fade-in">
                  <Icon name="Calendar" size={48} className="mx-auto mb-4 text-primary" />
                  <h4 className="text-2xl font-semibold mb-2">390+ лет</h4>
                  <p className="text-muted-foreground">Истории города</p>
                </Card>
                <Card className="p-8 animate-fade-in">
                  <Icon name="Building2" size={48} className="mx-auto mb-4 text-primary" />
                  <h4 className="text-2xl font-semibold mb-2">50+</h4>
                  <p className="text-muted-foreground">Исторических памятников</p>
                </Card>
                <Card className="p-8 animate-fade-in">
                  <Icon name="Users" size={48} className="mx-auto mb-4 text-primary" />
                  <h4 className="text-2xl font-semibold mb-2">37 000</h4>
                  <p className="text-muted-foreground">Жителей</p>
                </Card>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeSection === 'history' && (
        <div className="pt-20">
          <section className="py-20 bg-gradient-to-b from-muted to-white">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center mb-8 text-secondary animate-fade-in">
                История Ирбита
              </h2>
              <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-16 animate-fade-in">
                От небольшого острога до современного города с богатой историей
              </p>

              <div className="relative max-w-5xl mx-auto">
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-primary to-accent transform -translate-x-1/2"></div>

                {timelineEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`mb-12 flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    } animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <Card
                        className={`p-6 ${
                          event.era === 'old'
                            ? 'bg-secondary/5 border-secondary'
                            : event.era === 'new'
                            ? 'bg-primary/5 border-primary'
                            : 'bg-accent/5 border-accent'
                        }`}
                      >
                        <div className="text-3xl font-bold mb-2">{event.year}</div>
                        <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                        <p className="text-muted-foreground">{event.description}</p>
                      </Card>
                    </div>

                    <div className="w-2/12 flex justify-center">
                      <div
                        className={`w-6 h-6 rounded-full ${
                          event.era === 'old'
                            ? 'bg-secondary'
                            : event.era === 'new'
                            ? 'bg-primary'
                            : 'bg-accent'
                        } border-4 border-white shadow-lg relative z-10`}
                      ></div>
                    </div>

                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h3 className="text-4xl font-bold text-center mb-12 text-secondary">
                Культурное наследие
              </h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="p-6">
                  <Icon name="Landmark" size={48} className="mb-4 text-primary" />
                  <h4 className="text-xl font-semibold mb-3">Ирбитская ярмарка</h4>
                  <p className="text-muted-foreground">
                    Вторая по значимости ярмарка в Российской империи, центр торговли между Европой и Азией
                  </p>
                </Card>
                <Card className="p-6">
                  <Icon name="Camera" size={48} className="mb-4 text-primary" />
                  <h4 className="text-xl font-semibold mb-3">Музей фотографии</h4>
                  <p className="text-muted-foreground">
                    Единственный в России музей фотографии, хранящий богатую коллекцию исторических снимков
                  </p>
                </Card>
                <Card className="p-6">
                  <Icon name="Bike" size={48} className="mb-4 text-primary" />
                  <h4 className="text-xl font-semibold mb-3">Мотоциклетный завод</h4>
                  <p className="text-muted-foreground">
                    Ирбитский мотоциклетный завод — производитель легендарных мотоциклов «Урал»
                  </p>
                </Card>
                <Card className="p-6">
                  <Icon name="Church" size={48} className="mb-4 text-primary" />
                  <h4 className="text-xl font-semibold mb-3">Архитектура</h4>
                  <p className="text-muted-foreground">
                    Сохранившиеся храмы и купеческие дома XVIII-XIX веков создают уникальный облик города
                  </p>
                </Card>
              </div>
            </div>
          </section>
        </div>
      )}

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Ирбит</h3>
          <p className="text-white/80 mb-6">Сохраняя историю, строим будущее</p>
          <div className="flex justify-center gap-6">
            <Icon name="MapPin" size={24} className="text-white/60" />
            <Icon name="Phone" size={24} className="text-white/60" />
            <Icon name="Mail" size={24} className="text-white/60" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;