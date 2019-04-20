using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Data
{
    public interface ICosmosDbRepository<TEntity> where TEntity : BaseEntity
    {
        List<TEntity> GetAllEntities(string collectionName);
        Task<TEntity> GetEntity(string collectionName,string documentId);
        Task InsertEntityAsync(string collectionName, TEntity entity);
        Task DeleteEntityAsync(string collectionName, string documentId);
        Task UpdateEntityAsync(string collectionName, string documentId, TEntity entity);
    }
}