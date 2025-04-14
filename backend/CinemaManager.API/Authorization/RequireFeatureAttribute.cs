using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Security.Claims;
using CinemaManager.API.Models;
using CinemaManager.API.Services;

namespace CinemaManager.API.Authorization
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true)]
    public class RequireFeatureAttribute : Attribute, IAuthorizationFilter
    {
        private readonly string _requiredFeature;

        public RequireFeatureAttribute(string requiredFeature)
        {
            _requiredFeature = requiredFeature;
        }

        public void OnAuthorization(AuthorizationFilterContext context)
        {
            var user = context.HttpContext.User;
            
            if (!user.Identity?.IsAuthenticated ?? true)
            {
                context.Result = new UnauthorizedResult();
                return;
            }
            
            var role = user.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Role)?.Value;
            if (role == null)
            {
                context.Result = new BadRequestObjectResult("Role claim not found in token");
                return;
            }
            
            EmployeeFeatures employeeFeatures = EmployeeFeaturesService.GetEmployeeFeatures(role);
            string[] enabledFeatures = employeeFeatures.GetEnabledFeatures();
            
            if (!enabledFeatures.Contains(_requiredFeature))
            {
                context.Result = new ForbiddenObjectResult(
                    new { message = $"Access denied. You don't have permission to use the '{_requiredFeature}' feature." });
                return;
            }
        }
    }

    public class ForbiddenObjectResult : ObjectResult
    {
        public ForbiddenObjectResult(object value) : base(value)
        {
            StatusCode = StatusCodes.Status403Forbidden;
        }
    }
}