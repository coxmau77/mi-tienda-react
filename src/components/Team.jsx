// El componente debe mostrar una tarjeta o card para cada miembro con su avatar, nombre, email y id.

import "./css/style.css";

const team = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    name: "David Garcia",
    email: "david.garcia@example.com",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 8,
    name: "Laura Martinez",
    email: "laura.martinez@example.com",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: 9,
    name: "James Rodriguez",
    email: "james.rodriguez@example.com",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: 10,
    name: "Olivia Thompson",
    email: "olivia.thompson@example.com",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];

// src/components/Team.jsx

function Team() {
  return (
    <section className="team-container">
      <h1>Nuestro equipo</h1>

      <ul className="team-list">
        {team.map((member) => (
          <li key={member.id} className="card">
            <article>
              <img
                src={member.avatar}
                alt={`Avatar de ${member.name}`}
                className="avatar"
              />
              <header>
                <h2>{member.name}</h2>
              </header>
              <address>{member.email}</address>
              <p>
                <strong>ID:</strong> {member.id}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Team;
