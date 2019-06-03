using WebAPI.Models;

namespace WebAPI.Dtos
{
    public class AutomapperWebProfile : AutoMapper.Profile
    {
         public AutomapperWebProfile() {
            CreateMap<Room,RoomToSend>()
            .ForMember(dest => dest.NumberSVG,
            opts => opts.MapFrom(src => src.roomNumberSVG));

            CreateMap<RoomToSend,Room>();

            CreateMap<Desk,DeskToSend>()
            .ForMember(dest => dest.NumberSVG,
            opts => opts.MapFrom(src => src.NumberDeskSVG));

            CreateMap<DeskToSend,Desk>();
        }
        public static void Run() {
            AutoMapper.Mapper.Initialize(a => {
                a.AddProfile<AutomapperWebProfile>();
            });
        }
       
    }
}