using kolos.DTO;
using kolos.Model;

namespace kolos.BLL
{
    public class Service : IService
    {
        private static List<Mouse> mouses = new List<Mouse>{
            new Mouse { Id = 1, DPI = 2, Model="ja" },
            new Mouse { Id = 2, DPI = 1, Model="n" },
            new Mouse { Id = 3, DPI = 3, Model="pa" },
            new Mouse { Id = 4, DPI = 7, Model="wel" },
            new Mouse { Id = 5, DPI = 2, Model="czx" },
            new Mouse { Id = 6, DPI = 2, Model="31" },
            new Mouse { Id = 7, DPI = 2, Model="da" },
            new Mouse { Id = 8, DPI = 2, Model="qeasdw" },
            new Mouse { Id = 9, DPI = 2, Model="czxdsa" },
            new Mouse { Id = 10, DPI = 2, Model="dasd" },
            new Mouse { Id = 11, DPI = 2, Model="dasvz" },

        };

        public int add(MouseDTO mouse)
        {
            try
            {if(mouse.DPI<0)throw new Exception();
                int mouseid = mouses.Any() ? mouses.Max(m => m.Id) + 1 : 1;
                mouses.Add(new Mouse { Id = mouseid, Model = mouse.Model, DPI = mouse.DPI });
                return mouseid;
            }catch(Exception e)
            {
                return -2137;
            }
        }

        public List<Mouse> get()
        {
            return mouses;
        }

        public bool remove(int id)
        {
            var mouse = mouses.FirstOrDefault(m => m.Id == id);
            if (mouse == null)
            {
                return false;
            }

            mouses.Remove(mouse);
            return true;
        }
    }
}
