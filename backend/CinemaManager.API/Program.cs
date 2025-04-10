using CinemaManager.API.Data;
using CinemaManager.API.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173") // vite port
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
string connectionString = "Host=localhost;Port=5432;Database=cinema_manager_db;Username=admin;Password=pass";
builder.Services.AddDbContext<CinemaDbContext>(options =>
    options.UseNpgsql(connectionString));

builder.Services.AddScoped<MovieService>();
builder.Services.AddScoped<CinemaHallService>();
builder.Services.AddScoped<ScheduleService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowFrontend");


app.MapControllers();

app.Run();
