import axios from 'axios';

export default axios.create({
    baseURL: process.env.API_URL || 'http://127.0.0.1:8000/api/',
    headers: {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOGYyZDY1YmJmZjc4MWIyM2YyNTE3NmNlZjkzMzAzYTdiOTYyODdhZjNkYzUyZDQ2ODljMjVjZDA1ZDQxZmRmZWJiN2VhMmY1NjBiZDM1ODQiLCJpYXQiOjE2Mjg2NTczNDIuMTE4OTY0OTEwNTA3MjAyMTQ4NDM3NSwibmJmIjoxNjI4NjU3MzQyLjExODk3NjExNjE4MDQxOTkyMTg3NSwiZXhwIjoxNjYwMTkzMzQyLjA5NzU0OTkxNTMxMzcyMDcwMzEyNSwic3ViIjoiMSIsInNjb3BlcyI6W119.H3G36r0Zhd8XvFTwBV2pkTBZ774flB1J0wpuLNq21VeShe0MuEKuix08pkN8x_3L6L9DaM5HW6kyPGtMt8TIYxvP8ZAHJvU951KA7PO-_gX9YVeeL3Fw8gvjbz9kzRgLuRG-6zVnxJwKkOg2MJaySpw16lihI7uC-T7yk_x5fp7JvohTvGIG5Fq0nPKa6yWrwSjQcmWxuUpgzzqOZJ-ZoP75YEczwlgJkxLERq3SMjDWC8JGHVc2YHpF0FY4ly1XqgLxcYkhwLGWmD5xcSqYUkfug0NqMHlAw5XeVJjtDTHtx0GWl-zzf4e_AbKzl5UQl6lpfbIpfPT-lZ-YkP4wzdZR5cd5n5anHKIfeYpSjbR95qb6nbriaZ31e7Z8nIe3tKhRcEbZBfarNEcD1apP3IgY0u6aPzjjyCRrkcTkQkZ2969ZEZdsK0uBC-0vd-hyaNhzQe1j2tIvoifiPXjGztpMk9aixKEf-TzWPZMsL75pAFhk8So_F9SNfZuWX725uzq1-X5ESj9RPNdmQdsk0m9UP_ghbqiB9-xGXlJXv43tsJKPQCCnYLGa-XKUny4VJQGX4Bdg39vg729jkAMRofdjG8iyrIqaHfqWwBC2iiYaEhSadiJQg9gS-dwJOh0UNL5zjq49p_jg3Dd3Moi_nl1yIL9f2qWd4TdbGLa5Se0`
    }
});
