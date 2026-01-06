import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const { email } = req.body;

  try {
    // 1. Ajouter l'email à votre liste de contacts sur Resend
    // Remplacez 'votre_audience_id' par l'ID trouvé dans l'onglet "Audiences" sur Resend
    await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: '994c08d8-1e3d-47a2-844a-5d1b1cebf2f6', 
    });

    // 2. OPTIONNEL : Envoyer un mail de bienvenue avec le guide
    /*
    await resend.emails.send({
      from: 'Tafsut <bienvenue@tafsut.io>',
      to: email,
      subject: 'Votre guide Tafsut vous attend',
      html: '<p>Merci de rejoindre Tafsut ! Voici votre guide...</p>'
    });
    */

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Erreur lors de l'inscription" });
  }
}