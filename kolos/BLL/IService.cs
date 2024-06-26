using kolos.DTO;
using kolos.Model;

namespace kolos.BLL
{
    public interface IService
    {
        public int add(MouseDTO mouse);
        public bool remove(int id);
        public List<Mouse> get();
    }
}
